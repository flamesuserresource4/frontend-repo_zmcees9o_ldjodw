import { Bolt, Shield, PenTool } from "lucide-react";

const features = [
  {
    icon: Bolt,
    title: "Instant previews",
    desc: "See changes as you type with blazing-fast hot reloading.",
  },
  {
    icon: PenTool,
    title: "Beautiful by default",
    desc: "Polished components and layouts that look great out of the box.",
  },
  {
    icon: Shield,
    title: "Production ready",
    desc: "Robust tooling, type safety, and best practices baked in.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Everything you need to ship
          </h2>
          <p className="mt-3 text-gray-600">
            Skip the boilerplate. Focus on your product. We've taken care of the rest.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
