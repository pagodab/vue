import { ComponentTreeNode, InspectedComponentData, ComponentInstance } from './component'
import { App } from './app'
import { CustomInspectorNode, CustomInspectorState } from './api'

export const enum Hooks {
  TRANSFORM_CALL = 'transformCall',
  GET_APP_RECORD_NAME = 'getAppRecordName',
  GET_APP_ROOT_INSTANCE = 'getAppRootInstance',
  REGISTER_APPLICATION = 'registerApplication',
  WALK_COMPONENT_TREE = 'walkComponentTree',
  WALK_COMPONENT_PARENTS = 'walkComponentParents',
  INSPECT_COMPONENT = 'inspectComponent',
  GET_COMPONENT_BOUNDS = 'getComponentBounds',
  GET_COMPONENT_NAME = 'getComponentName',
  GET_ELEMENT_COMPONENT = 'getElementComponent',
  GET_INSPECTOR_TREE = 'getInspectorTree',
  GET_INSPECTOR_STATE = 'getInspectorState'
}

export interface ComponentBounds {
  left: number
  top: number
  width: number
  height: number
}

export type HookPayloads = {
  [Hooks.TRANSFORM_CALL]: {
    callName: string
    inArgs: any[]
    outArgs: any[]
  }
  [Hooks.GET_APP_RECORD_NAME]: {
    app: App
    name: string
  }
  [Hooks.GET_APP_ROOT_INSTANCE]: {
    app: App
    root: ComponentInstance
  }
  [Hooks.REGISTER_APPLICATION]: {
    app: App
  }
  [Hooks.WALK_COMPONENT_TREE]: {
    componentInstance: ComponentInstance
    componentTreeData: ComponentTreeNode
    maxDepth: number
    filter: string
  }
  [Hooks.WALK_COMPONENT_PARENTS]: {
    componentInstance: ComponentInstance
    parentInstances: ComponentInstance[]
  }
  [Hooks.INSPECT_COMPONENT]: {
    componentInstance: ComponentInstance
    instanceData: InspectedComponentData
  }
  [Hooks.GET_COMPONENT_BOUNDS]: {
    componentInstance: ComponentInstance
    bounds: ComponentBounds
  }
  [Hooks.GET_COMPONENT_NAME]: {
    componentInstance: ComponentInstance
    name: string
  }
  [Hooks.GET_ELEMENT_COMPONENT]: {
    element: HTMLElement | any
    componentInstance: ComponentInstance
  }
  [Hooks.GET_INSPECTOR_TREE]: {
    app: App
    inspectorId: string
    filter: string
    rootNodes: CustomInspectorNode[]
  }
  [Hooks.GET_INSPECTOR_STATE]: {
    app: App
    inspectorId: string
    nodeId: string
    state: CustomInspectorState
  }
}

export type HookHandler<TPayload, TContext> = (payload: TPayload, ctx: TContext) => void | Promise<void>

export interface Hookable<TContext> {
  transformCall (handler: HookHandler<HookPayloads[Hooks.TRANSFORM_CALL], TContext>)
  getAppRecordName (handler: HookHandler<HookPayloads[Hooks.GET_APP_RECORD_NAME], TContext>)
  getAppRootInstance (handler: HookHandler<HookPayloads[Hooks.GET_APP_ROOT_INSTANCE], TContext>)
  registerApplication (handler: HookHandler<HookPayloads[Hooks.REGISTER_APPLICATION], TContext>)
  walkComponentTree (handler: HookHandler<HookPayloads[Hooks.WALK_COMPONENT_TREE], TContext>)
  walkComponentParents (handler: HookHandler<HookPayloads[Hooks.WALK_COMPONENT_PARENTS], TContext>)
  inspectComponent (handler: HookHandler<HookPayloads[Hooks.INSPECT_COMPONENT], TContext>)
  getComponentBounds (handler: HookHandler<HookPayloads[Hooks.GET_COMPONENT_BOUNDS], TContext>)
  getComponentName (handler: HookHandler<HookPayloads[Hooks.GET_COMPONENT_NAME], TContext>)
  getElementComponent (handler: HookHandler<HookPayloads[Hooks.GET_ELEMENT_COMPONENT], TContext>)
  getInspectorTree (handler: HookHandler<HookPayloads[Hooks.GET_INSPECTOR_TREE], TContext>)
  getInspectorState (handler: HookHandler<HookPayloads[Hooks.GET_INSPECTOR_STATE], TContext>)
}