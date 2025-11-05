export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vibe Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a className="hover:text-gray-900" href="#">Privacy</a>
          <a className="hover:text-gray-900" href="#">Terms</a>
          <a className="hover:text-gray-900" href="#">Changelog</a>
        </div>
      </div>
    </footer>
  );
}
