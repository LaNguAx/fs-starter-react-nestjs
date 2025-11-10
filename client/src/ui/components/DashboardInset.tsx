import { Separator } from '@/ui/shadcnComponents/separator';

import { SidebarInset, SidebarTrigger } from '@/components/animate-ui/components/radix/sidebar';

import { Outlet } from 'react-router';
import BreadCrumbs from '@/ui/components/BreadCrumbs';

export default function DashboardInset() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <BreadCrumbs />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
    </div>
    <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
        <Outlet />
      </div>
    </SidebarInset>
  );
}
