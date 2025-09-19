export default function MarketingFooter() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* left: brand / copyright */}
          <small className="text-gray-500">
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://pschonffeldt.dev/"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              pschonffeldt
            </a>
            . All rights reserved.
          </small>

          {/* right: optional links */}
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-blue-600 transition-colors">
              Terms
            </a>
            <a
              href="mailto:hello@pschonffeldt.dev"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
