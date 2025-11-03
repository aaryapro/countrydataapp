export default function CountrySkeleton() {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 shadow-sm rounded-xl w-64 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Flag area */}
      <div className="h-40 w-full bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 skeleton-shimmer"></div>

      <div className="p-4 space-y-3">
        <div className="h-5 w-1/2 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded skeleton-shimmer"></div>
        <div className="h-4 w-3/4 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded skeleton-shimmer"></div>
        <div className="h-4 w-2/3 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded skeleton-shimmer"></div>
        <div className="h-4 w-1/2 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded skeleton-shimmer"></div>
      </div>
    </div>
  );
}
