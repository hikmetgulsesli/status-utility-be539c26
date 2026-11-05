// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" data-route="/status" className="flex-1 flex flex-col justify-between" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_OBS_STAYS_ON_STATUS_ROUTE">
          {/* Top Bar */}
          <header className="w-full border-b border-slate-200 bg-white px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                SU
              </div>
              <div>
                <h1 className="text-base font-semibold leading-none text-slate-800">Status Utility</h1>
                <p className="text-xs text-slate-500 mt-1">System Monitoring &amp; State Diagnostics</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                Route: /status
              </span>
            </div>
          </header>
      
          {/* Main Content Area */}
          <main className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center flex flex-col items-center">
              {/* Status Indicator Icon */}
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
      
              <h2 className="text-2xl font-bold text-slate-800 mb-2">System Status Dashboard</h2>
              <p className="text-sm text-slate-500 mb-6 max-w-sm">Inspect and refresh current runtime application readiness</p>
      
              {/* Status Readout Surface */}
              <div data-surface-id="SURF_STATUS_READOUT" data-value="refreshed" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 text-center" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_OBS_STATUS_TEXT OBS_REFRESH_STATUS_OBS_STATUS_VALUE">
                <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Current State</span>
                <div className="text-2xl font-bold text-emerald-600">Status refreshed</div>
                <div className="mt-2 text-xs font-mono text-slate-500">Value: refreshed</div>
              </div>
      
              {/* Single Authorized Action Control Slot */}
              <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" data-setfarm-element-ref="E000003" data-observable-refs="OBS_REFRESH_STATUS_OBS_REFRESH_BUTTON_VISIBLE_ENABLED" data-action-id="refresh-1" onClick={actions?.["refresh-1"]}>Refresh</button>
            </div>
          </main>
      
          {/* Footer */}
          <footer className="w-full border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
            Status Utility — Active route /status
          </footer>
        </div>
    </>
  );
}
