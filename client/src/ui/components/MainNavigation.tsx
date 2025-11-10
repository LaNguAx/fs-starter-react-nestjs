import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/animate-ui/components/radix/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/animate-ui/primitives/radix/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/animate-ui/components/radix/dropdown-menu';

import { useIsMobile } from '@/hooks/shadcnHooks/use-mobile';
import {
  ChevronRight,
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import Skeleton from '@/ui/components/Skeleton';
import { Link, useParams } from 'react-router';
import { useGetBoardCategoriesQuery } from '@/store/apis/categoriesApi';
import Icon from '@/ui/components/Icon';

const DATA = {
  user: {
    name: 'Itay Aknin',
    email: 'itay.aknin.cs@gmail.com',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQEgc91OVtwXfQ/profile-displayphoto-shrink_200_200/B4DZdAYcsZHMAY-/0/1749131840924?e=1763596800&v=beta&t=SA4TiYclvVThvsut6ERjcGrbuthLqNpWB52YgROAc8c',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '/playground',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '/playground/history',
        },
        {
          title: 'Starred',
          url: '/playground/starred',
        },
        {
          title: 'Settings',
          url: '/playground/settings',
        },
      ],
    },
    {
      title: 'Models',
      url: '/models',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '/models/genesis',
        },
        {
          title: 'Explorer',
          url: '/models/explorer',
        },
        {
          title: 'Quantum',
          url: '/models/quantum',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '/docs',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '/docs/introduction',
        },
        {
          title: 'Get Started',
          url: '/docs/get-started',
        },
        {
          title: 'Tutorials',
          url: '/docs/tutorials',
        },
        {
          title: 'Changelog',
          url: '/docs/changelog',
        },
      ],
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '/settings/general',
        },
        {
          title: 'Team',
          url: '/settings/team',
        },
        {
          title: 'Billing',
          url: '/settings/billing',
        },
        {
          title: 'Limits',
          url: '/settings/limits',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export default function MainNavigation() {
  const isMobile = useIsMobile();
  const { board: boardSlug, category: categorySlug } = useParams();

  const activeBoard = useAppSelector((store) => store.appState.activeBoard);
  const { data: categories, isLoading, isFetching } = useGetBoardCategoriesQuery(boardSlug as string, { skip: !boardSlug });

  if (!activeBoard || !boardSlug || isLoading || isFetching) return <Skeleton />;

  return (
    <>
      {/* Nav Main */}
      {activeBoard && boardSlug && categories && (
        <>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              {categories.map((category) =>
                category.children && category.children.length > 0 ? (
                  <Collapsible
                    key={category.id ?? category.title}
                    asChild
                    defaultOpen={category.slug === categorySlug}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={category.title}>
                          {category.icon && <Icon icon={category.icon} />}
                          <span>{category.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {category.children.map((subCategory) => (
                            <SidebarMenuSubItem key={subCategory.id ?? subCategory.title}>
                              <SidebarMenuSubButton asChild>
                                <Link to={`${boardSlug}/${category.slug}/${subCategory.slug}`}>
                                  <span>{subCategory.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={category.id ?? category.title}>
                    <SidebarMenuButton asChild tooltip={category.title}>
                      <Link to={`${boardSlug}/${category.slug}`}>
                        {category.icon && <Icon icon={category.icon} />}
                        <span>{category.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              {DATA.projects.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction showOnHover>
                        <MoreHorizontal />
                        <span className="sr-only">More</span>
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-48 rounded-lg"
                      side={isMobile ? 'bottom' : 'right'}
                      align={isMobile ? 'end' : 'start'}
                    >
                      <DropdownMenuItem>
                        <Folder className="text-muted-foreground" />
                        <span>View Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Forward className="text-muted-foreground" />
                        <span>Share Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Trash2 className="text-muted-foreground" />
                        <span>Delete Project</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-sidebar-foreground/70">
                  <MoreHorizontal className="text-sidebar-foreground/70" />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </>
      )}
    </>
  );
}
