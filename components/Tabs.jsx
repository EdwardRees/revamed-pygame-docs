'use client'
import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

// import { cn } from '../lib/utils'

const Tabs = TabsPrimitive.Root


const TabsList = (({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={
      'inline-flex items-center justify-center rounded-md bg-slate-100 p-1 dark:bg-slate-800'
    }
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = (({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={
      'inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-slate-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:text-slate-200 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-100'
    }
    ref={ref}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = (({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={
      'mt-2 rounded-md border border-slate-300 bg-slate-100 p-6 dark:border-slate-700 dark:bg-slate-900 w-full'}
    ref={ref}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
