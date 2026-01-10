export default function InvestmentImpact() {
  const reasons = [
    {
      title: "Perfect Market Timing",
      desc:
        "Government-led infrastructure push and urbanization create a once-in-a-decade growth opportunity.",
    },
    {
      title: "De-risked Platform",
      desc:
        "Diversified portfolio, strong order book visibility, and experienced leadership reduce execution risk.",
    },
    {
      title: "Exceptional Growth",
      desc:
        "45% projected revenue CAGR with improving margins as operations scale.",
    },
    {
      title: "Multiple Exit Options",
      desc:
        "Strategic sale, private equity secondary, or IPO providing flexibility to investors.",
    },
  ];

  const steps = [
    "Due Diligence & Data Access",
    "Term Sheet Negotiation",
    "Legal Documentation",
    "Capital Deployment",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid gap-16 md:grid-cols-2">

        {/* Why Invest */}
        <div>
          <h2 className="text-3xl font-bold mb-10">
            Why Invest in Tech Mac?
          </h2>

          <div className="space-y-6">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="border-l-4 border-indigo-500 pl-6"
              >
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h2 className="text-3xl font-bold mb-10">
            Next Steps for Investors
          </h2>

          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-indigo-600 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
