import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
} from '@carbon/react';

import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import { useRouter } from 'next/navigation'


export default function AppHeader() {
    const router = useRouter()

    return (<HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }: any) => (
            <Header aria-label="Carbon Tutorial">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
                <HeaderName onClick={() => { router.push('/') }}>
                    Accessibility Demo
                </HeaderName>
                <HeaderNavigation aria-label="Accessibility demo with carbon">
                    <HeaderMenuItem onClick={() => { router.push('/examples') }}>Examples</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction
                        aria-label="Notifications"
                        tooltipAlignment="center"
                        className="action-icons"
                    >
                        <Notification size={20} />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction
                        aria-label="User Avatar"
                        tooltipAlignment="center"
                        className="action-icons"
                    >
                        <UserAvatar size={20} />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
                        <Switcher size={20} />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        )}
    />)
}
