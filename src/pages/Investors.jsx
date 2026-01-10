import InvestorHero from "../components/investors/InvestorHero";
import MarketOpportunity from "../components/investors/MarketOpportunity";

import FinancialOverview from "../components/investors/FinancialOverView";
import InvestmentImpact from "../components/investors/InvestmentImpact";
import CTA from "../components/CTA";

export default function Investors() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO / VALUE PROPOSITION */}
      <section>
        <InvestorHero />
      </section>

      {/* WHY THIS MARKET */}
      <section>
        <MarketOpportunity />
      </section>

      {/* FINANCIAL STRENGTH */}
      <section>
        <FinancialOverview />
      </section>

      {/* INVESTOR VALUE & IMPACT */}
      <section>
        <InvestmentImpact />
      </section>

      {/* FINAL CTA */}
      <section>
        <CTA />
      </section>

    </main>
  );
}
