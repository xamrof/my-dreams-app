import { useStore } from "@nanostores/react";
import { accomplishedCount } from "../store/dreamStore";

export default function Stats({ total }) {
    const $accomplishes = useStore(accomplishedCount);
    const percentage = total > 0 ? Math.round(($accomplishes / total) * 100) : 0;

    return (
        <div className="w-full max-w-4xl mx-auto mb-10 p-6 bg-gray-900 rounded-2xl border border-purple-500/30 shadow-xl">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Total Progress</p>
                    <h2 className="text-3xl text-white font-black">{$accomplishes} <span className="text-gray-500 text-lg">/ {total} accomplished</span></h2>
                </div>
                <div className="text-right">
                    <span className="text-purple-400 font-bold text-2xl">{percentage}%</span>
                </div>
            </div>

            <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                <div
                    className="bg-gradient-to-r from-purple-600 to-pink-500 h-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                >   
                </div>
            </div>

        </div>
    )
}
