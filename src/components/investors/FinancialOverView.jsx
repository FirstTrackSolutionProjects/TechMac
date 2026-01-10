export default function FinancialOverview() {
  const metrics = [
    { label: "Projected IRR", value: "22%" },
    { label: "Cash Multiple", value: "3.2x" },
    { label: "EBITDA Margin", value: "18%" },
    { label: "Payback Period", value: "24 Months" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Financial Overview
        </h2>

        {/* Metrics */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {metrics.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">
                {item.value}
              </h3>
              <p className="text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Revenue Placeholder */}
        <div className="bg-white rounded-2xl p-8 shadow">
          <h3 className="text-xl font-semibold mb-4">
            Revenue Growth Projection
          </h3>
          <p className="text-slate-600">
            Our diversified business model across township, transport, electrical,
            and telecom verticals ensures consistent revenue growth while
            maintaining strong profitability and cash flow discipline.
          </p>
        </div>
      </div>
    </section>
  );
}
