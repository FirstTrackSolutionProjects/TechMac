export default function MarketOpportunity() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-4">Market Opportunity</h2>
          <p className="text-slate-600 mb-4">
            India’s infrastructure sector is witnessing unprecedented growth driven by
            urbanization, government initiatives, and digital transformation.
          </p>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>₹111 lakh crore National Infrastructure Pipeline</li>
            <li>100+ Smart Cities under development</li>
            <li>Rapid telecom & renewable expansion</li>
          </ul>
        </div>

        {/* <img
          src="/investors/market.png"
          alt="Market Opportunity"
          className="rounded-2xl shadow"
        /> */}
      </div>
    </section>
  );
}
