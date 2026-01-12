export default function Terms() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 text-slate-700">

          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
            Terms of Use
          </h1>

          <p className="mb-6 leading-relaxed">
            By accessing and using the Tech Mac Project website, you agree to
            comply with and be bound by the following terms and conditions. Please
            read them carefully before using our services.
          </p>

          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
              Use of Website
            </h2>
            <p className="leading-relaxed">
              This website is provided for informational purposes only. You
              agree not to misuse the website or engage in any activity that may
              disrupt, damage, or interfere with the proper functioning of the
              site.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
              Intellectual Property Rights
            </h2>
            <p className="leading-relaxed">
              All content, trademarks, logos, designs, and materials displayed
              on this website are the intellectual property of Tech Mac Project
              Private Limited and are protected by applicable laws. Unauthorized
              use is strictly prohibited.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              Tech Mac Project Private Limited shall not be held liable for any
              direct, indirect, incidental, or consequential damages arising
              from your use of or inability to use this website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
              Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to update or modify these Terms of Use at any
              time without prior notice. Continued use of the website
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <div className="border-t pt-4 mt-8 text-sm sm:text-base">
            <p>
              If you have any questions regarding these Terms of Use, please
              contact us at{" "}
              <a
                href="mailto:info@techmacproject.com"
                className="font-semibold text-slate-900 hover:underline"
              >
                info@techmacproject.com
              </a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
