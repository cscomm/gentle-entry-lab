/**
 * GeoGate is currently disabled and passes all traffic through.
 *
 * Previously used to gate visitors by country; that logic has been removed
 * per request so no blocking policy is applied.
 */
const GeoGate = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default GeoGate;
