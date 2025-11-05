import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full text-xs font-medium">
              <Sparkles size={14} /> New: Faster previews and improved DX
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Build beautiful apps, visually and fast
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Spin up full-stack experiences in minutes. Design in the browser, connect real data, and ship with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-sm">Start building</button>
              <button className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium">Live demo</button>
            </div>
            <p className="mt-3 text-sm text-gray-500">No credit card required.</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-xl bg-white/90 backdrop-blur">
                <div className="h-full w-full grid grid-cols-6 gap-2 p-4">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-gradient-to-br from-gray-100 to-white border border-gray-200"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 shadow-lg rounded-xl p-4 w-48">
              <div className="h-2 w-24 bg-gray-200 rounded" />
              <div className="mt-2 space-y-2">
                <div className="h-2 w-full bg-gray-100 rounded" />
                <div className="h-2 w-5/6 bg-gray-100 rounded" />
                <div className="h-2 w-3/4 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
