import {useState, useEffect, use} from 'react';
import { accomplishedCount } from '../store/dreamStore';

export default function DreamCard({ dreamId, title, description, status: initialStatus, imageUrl }) {

    const [status, setStatus] = useState(initialStatus);

    useEffect(() => {
      const savedStatus = localStorage.getItem(`dream-status-${dreamId}`);
      if (savedStatus) {
        setStatus(savedStatus);
      }

      if (savedStatus === 'logrado') {
        accomplishedCount.set(accomplishedCount.get() + 1);
      }
    }, [dreamId])

    const toggleStatus = () => {
        const nextStatus = status === 'logrado' ? 'pendiente' : 'logrado';
        setStatus(nextStatus);
        localStorage.setItem(`dream-status-${dreamId}`, nextStatus);

      if (nextStatus === 'logrado') {
        accomplishedCount.set(accomplishedCount.get() + 1);
      }else {
        accomplishedCount.set(accomplishedCount.get() - 1);
      }
    }
    return (
        <div className="w-full md:w-80 rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                {/*Dream picture */}
            <img className="w-full h-48 object-cover" src={imageUrl || 'https://via.placeholder.com/400x200'} alt={title} />
    <div className="px-6 py-4">
        {/* Título y Estado */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-xl text-white">{title}</h3>
    <span className={`text-[10px] px-2 py-1 rounded-full whitespace-nowrap ${status === 'logrado' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'} font-bold uppercase`}>
            {status === 'logrado' ? '✓ Logrado' : 'En construcción'}
          </span>
        </div>
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>

      <div className="px-6 pt-4 pb-4 border-t border-gray-800 flex flex-col gap-2">
        <button
        onClick={toggleStatus}
         className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
          {status === 'logrado' ? 'Marcar como pendiente' : '!Lo logre!'}
        </button>
      </div>
    </div>
    )
}
