import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/animate-ui/components/radix/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/animate-ui/components/radix/dropdown-menu';
import { ChevronsUpDown, Home, Plus } from 'lucide-react';
import { useIsMobile } from '@/hooks/shadcnHooks/use-mobile';
import { Link, useParams } from 'react-router';
import { useGetUserBoardsQuery } from '@/store/apis/boardsApi';
import Skeleton from '@/ui/components/Skeleton';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { setActiveBoard } from '@/store/slices/appSlice';
import { useEffect } from 'react';

export default function BoardSwitcher() {
  const isMobile = useIsMobile();
  const { board: activeBoardSlug } = useParams();
  const dispatch = useAppDispatch();

  const { data: boards, error, isLoading, isFetching } = useGetUserBoardsQuery('1');

  const activeBoard = boards && boards.find((board) => board.slug === activeBoardSlug);

  useEffect(() => {
    if (!activeBoard) return;
    dispatch(setActiveBoard(activeBoard));
  }, [activeBoard, dispatch, isLoading]);

  return (
    <>
      {(isLoading || isFetching) && <Skeleton />}
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Home />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  {error && (
                    <>
                      <span className="truncate font-semibold">Error</span>
                      <span className="truncate text-xs">An error has occured</span>
                    </>
                  )}
                  {!isLoading && !activeBoard && (
                    <>
                      <span className="truncate font-semibold">Boards</span>
                      <span className="truncate text-xs">Select a board</span>
                    </>
                  )}
                  {!isLoading && activeBoard && (
                    <>
                      <span className="truncate font-semibold">{activeBoard.title}</span>
                      <span className="truncate text-xs">{activeBoard.subtitle}</span>
                    </>
                  )}
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? 'bottom' : 'right'}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">Boards</DropdownMenuLabel>
              {boards?.map((board, index) => (
                <Link to={board.slug} key={board.slug}>
                  <DropdownMenuItem className="gap-2 p-2 cursor-pointer">
                    <div className="flex size-6 items-center justify-center rounded-sm border">
                      {/* {board?.logo && <board.logo className="size-4 shrink-0" />} */}
                      <Home />
                    </div>
                    {board.title}
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 p-2 cursor-pointer">
                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">Add board</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
