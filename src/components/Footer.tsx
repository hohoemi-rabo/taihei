import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            &copy; 2024 泰平スタジオ. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-primary-600">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary-600">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary-600">
              <span className="sr-only">LINE</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.84 2 10.5c0 4.17 3.59 7.65 8.44 8.33.33.07.78.21.89.48.1.25.07.64.03.89l-.14.85c-.04.25-.19 1-.83.55-.64-.46-3.36-1.97-4.59-3.38C3.93 16.26 3 13.5 3 10.5 3 6.36 7.03 3 12 3s9 3.36 9 7.5c0 4.14-4.03 7.5-9 7.5z"/>
                <path d="M8.5 9.5h-1a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5zm2.5 0a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H11zm4.5 0h-1.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-1v-.5h1a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-1v-.5h1a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}