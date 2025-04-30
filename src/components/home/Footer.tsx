import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="dark:bg-stone-900">
      <div className="container mx-auto px-4 py-4">
        <div className="border-t dark:border-stone-200/25  pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-stone-200/50">
            © 2025 Daily Peace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
