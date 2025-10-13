import { Route } from "@/frontend/routes/status/$slug";
import { useState } from "react";
import StatusPagePasswordForm from "./status-page/status-page-password-form";
import StatusPageUptimeChart from "./status-page/status-page-uptime-chart";

interface StatusPageMonitor {
  id: string;
  name: string;
  status: string;
  uptime_percentage?: number;
  avg_response_time?: number;
  total_checks?: number;
  successful_checks?: number;
  daily_stats?: Array<{
    date: string;
    total_requests: number;
    successful_requests: number;
    failed_requests: number;
    uptime_percentage: number | null;
  }>;
  category?: string;
  [key: string]: unknown;
}

function getStatusText(status: string): string {
  switch (status) {
    case "active":
      return "OPERATIONAL";
    case "degraded":
      return "DEGRADED";
    case "error":
    case "broken":
      return "DOWN";
    case "maintenance":
      return "MAINTENANCE";
    default:
      return "UNKNOWN";
  }
}

function getStatusColor(status: string): string {
  switch (status) {
    case "active":
      return "green";
    case "degraded":
      return "yellow";
    case "error":
    case "broken":
      return "red";
    case "maintenance":
      return "blue";
    default:
      return "gray";
  }
}

function getOverallStatus(monitors: StatusPageMonitor[]) {
  if (monitors.length === 0) {
    return { status: "unknown", text: "NO SERVICES", color: "gray" };
  }

  const hasError = monitors.some(
    (m) => m.status === "error" || m.status === "broken"
  );
  const hasMaintenance = monitors.some((m) => m.status === "maintenance");
  const hasDegraded = monitors.some((m) => m.status === "degraded");

  if (hasError) {
    return { status: "error", text: "PARTIAL OUTAGE", color: "red" };
  }

  if (hasMaintenance) {
    return { status: "maintenance", text: "UNDER MAINTENANCE", color: "blue" };
  }

  if (hasDegraded) {
    return {
      status: "degraded",
      text: "DEGRADED PERFORMANCE",
      color: "yellow",
    };
  }

  return {
    status: "operational",
    text: "ALL SYSTEMS OPERATIONAL",
    color: "green",
  };
}

function groupMonitorsByCategory(monitors: StatusPageMonitor[]) {
  const groups: Record<string, StatusPageMonitor[]> = {};

  monitors.forEach((monitor) => {
    const category =
      monitor.category ||
      (monitor.name.toLowerCase().includes("api")
        ? "API Services"
        : monitor.name.toLowerCase().includes("frontend") ||
            monitor.name.toLowerCase().includes("web")
          ? "Web Services"
          : monitor.name.toLowerCase().includes("docs") ||
              monitor.name.toLowerCase().includes("documentation")
            ? "Documentation"
            : monitor.name.toLowerCase().includes("database") ||
                monitor.name.toLowerCase().includes("db")
              ? "Database"
              : "Core Services");

    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(monitor);
  });

  return groups;
}

type TabType = "status" | "maintenance" | "incidents";

export default function StatusPage() {
  const data = Route.useLoaderData();
  const [activeTab, setActiveTab] = useState<TabType>("status");

  if (data.needsPassword) {
    return <StatusPagePasswordForm slug={data.slug} onSuccess={() => {}} />;
  }

  const monitors = data.monitors as StatusPageMonitor[];
  const overallStatus = getOverallStatus(monitors);

  const monitorsWithUptime = monitors.filter(
    (m) => m.uptime_percentage !== undefined && m.uptime_percentage !== null
  );
  const avgUptime =
    monitorsWithUptime.length > 0
      ? monitorsWithUptime.reduce(
          (sum, m) => sum + (m.uptime_percentage || 0),
          0
        ) / monitorsWithUptime.length
      : 0;

  const monitorsWithResponseTime = monitors.filter(
    (m) => m.avg_response_time !== undefined && m.avg_response_time !== null
  );
  const avgResponseTime =
    monitorsWithResponseTime.length > 0
      ? Math.round(
          monitorsWithResponseTime.reduce(
            (sum, m) => sum + (m.avg_response_time || 0),
            0
          ) / monitorsWithResponseTime.length
        )
      : 0;

  const monitorGroups = groupMonitorsByCategory(monitors);
  const currentTime = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl">
        <header className="bg-white shadow-sm dark:bg-gray-800">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {data.title}
                </h1>
                {data.description && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {data.description}
                  </p>
                )}
              </div>

              {/* Navigation Tabs */}
              <nav className="flex rounded-lg bg-gray-100 p-1 dark:bg-gray-700">
                {[
                  { id: "status", label: "Status" },
                  { id: "maintenance", label: "Maintenance" },
                  { id: "incidents", label: "Incidents" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-white text-gray-900 shadow-sm dark:bg-gray-600 dark:text-white"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="p-6">
          {activeTab === "status" && (
            <div className="space-y-8">
              <div className="text-center">
                <div
                  className={`inline-flex items-center gap-3 rounded-xl px-8 py-6 ${
                    overallStatus.color === "green"
                      ? "bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100"
                      : overallStatus.color === "red"
                        ? "bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100"
                        : overallStatus.color === "yellow"
                          ? "bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100"
                          : overallStatus.color === "blue"
                            ? "bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100"
                            : "bg-gray-50 text-gray-900 dark:bg-gray-800/20 dark:text-gray-100"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full ${
                      overallStatus.color === "green"
                        ? "bg-green-500"
                        : overallStatus.color === "red"
                          ? "bg-red-500"
                          : overallStatus.color === "yellow"
                            ? "bg-yellow-500"
                            : overallStatus.color === "blue"
                              ? "bg-blue-500"
                              : "bg-gray-500"
                    }`}
                  />
                  <span className="text-xl font-semibold">
                    {overallStatus.text}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  Last updated: {currentTime}
                </p>
              </div>

              {/* Services */}
              <div className="space-y-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Services
                </h2>

                {Object.entries(monitorGroups).map(([category, monitors]) => (
                  <div key={category} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {category}
                      </h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {monitors.filter((m) => m.status === "active").length}{" "}
                        of {monitors.length} operational
                      </div>
                    </div>

                    <div className="space-y-2">
                      {monitors.map((monitor) => {
                        const statusColor = getStatusColor(monitor.status);
                        return (
                          <div
                            key={monitor.id}
                            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`h-3 w-3 rounded-full ${
                                  statusColor === "green"
                                    ? "bg-green-500"
                                    : statusColor === "yellow"
                                      ? "bg-yellow-500"
                                      : statusColor === "red"
                                        ? "bg-red-500"
                                        : statusColor === "blue"
                                          ? "bg-blue-500"
                                          : "bg-gray-500"
                                }`}
                              />
                              <span className="font-medium text-gray-900 dark:text-white">
                                {monitor.name}
                              </span>
                            </div>

                            <div className="flex items-center gap-4">
                              {data.show_values &&
                                monitor.uptime_percentage !== undefined && (
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {monitor.uptime_percentage.toFixed(1)}%
                                    uptime
                                  </div>
                                )}
                              {data.show_values &&
                                monitor.avg_response_time !== undefined && (
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {monitor.avg_response_time}ms avg
                                  </div>
                                )}
                              <div
                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                  statusColor === "green"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                    : statusColor === "yellow"
                                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                      : statusColor === "red"
                                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                        : statusColor === "blue"
                                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                          : "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300"
                                }`}
                              >
                                {getStatusText(monitor.status)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {data.show_values &&
                      monitors.some((m) => m.daily_stats) && (
                        <div className="mt-4 space-y-3">
                          {monitors
                            .filter(
                              (m) => m.daily_stats && m.daily_stats.length > 0
                            )
                            .map((monitor) => (
                              <div
                                key={`chart-${monitor.id}`}
                                className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                              >
                                <h4 className="mb-3 font-medium text-gray-900 dark:text-white">
                                  {monitor.name} - 7 Day History
                                </h4>
                                <StatusPageUptimeChart
                                  monitor={monitor}
                                  showValues={data.show_values}
                                />
                              </div>
                            ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              {data.show_values && (
                <div className="mt-8">
                  <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                    Overall Statistics
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {monitors.filter((m) => m.status === "active").length}
                        <span className="text-lg text-gray-500">
                          /{monitors.length}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Services Online
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {avgUptime.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Average Uptime
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {avgResponseTime}ms
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Avg Response Time
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "maintenance" && (
            <div className="py-16 text-center">
              <div className="mx-auto max-w-md">
                <div className="mb-6 text-6xl">🔧</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  No Scheduled Maintenance
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  There is no scheduled maintenance at this time. We'll notify
                  you of any upcoming maintenance windows.
                </p>
              </div>
            </div>
          )}

          {activeTab === "incidents" && (
            <div className="py-16 text-center">
              <div className="mx-auto max-w-md">
                <div className="mb-6 text-6xl">📋</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  No Recent Incidents
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  There have been no reported incidents in the last 7 days. All
                  systems are running smoothly.
                </p>
              </div>
            </div>
          )}
        </main>

        <footer className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <p>Powered by Shamva</p>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
