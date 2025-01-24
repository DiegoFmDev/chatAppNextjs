// app/layout.tsx
import "./globals.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata = {
  title: "ChatApp",
  description: "Un chat rápido y casual sin necesidad de registro.",
};

// const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <QueryClientProvider client={queryClient}> */}
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children} {/* Aquí se renderizan las páginas individuales */} 
          </TooltipProvider>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}


// import "./globals.css";

// export const metadata = {
//   title: "ChatApp",
//   description: "Un chat rápido y casual sin necesidad de registro.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
