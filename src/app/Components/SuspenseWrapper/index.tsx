import { Suspense } from "react";

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
    <Suspense fallback={<div>Carregando...</div>}>
      {children}
    </Suspense>
);

export default SuspenseWrapper;