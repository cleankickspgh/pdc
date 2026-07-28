import { stats } from "@/data/site";

export function StatsBar() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-r border-pdc-deep/10 px-5 py-8 lg:px-10">
            <div className="text-3xl font-black text-pdc-deep">{stat.value}</div>
            <div className="mt-1 text-sm text-pdc-graphite/55">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
