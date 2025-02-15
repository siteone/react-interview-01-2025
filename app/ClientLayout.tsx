'use client'

import Layout from "@/components/Layout/Layout";
import CoursesStoreProvider from "@/modules/courses/storeProvider";
import { compose } from 'recompose'
import initializeApp from '@/modules/app/HOC/initializeApp'

interface LayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<LayoutProps> = ({ children }) => (
  <Layout>{children}</Layout>
)

const EnhancedLayout = compose<LayoutProps, {}>(
  initializeApp
)(BaseLayout)

const ClientLayout: React.FC<LayoutProps> = ({ children }) => (
  <CoursesStoreProvider>
    <EnhancedLayout>{children}</EnhancedLayout>
  </CoursesStoreProvider>
)

export default ClientLayout 