export type TEventPath =
  /// ============================
  /// BASE LAYOUT EVENTS
  /// ============================
  /// Error events
  | 'base:error:dialog:set'
  | 'base:success:dialog:set'
  /// use modal dialogs
  | 'base:modal:dialog:password:confirm:set'
  ///
  /// ============================
  /// COMPANY CULTURE
  /// ============================
  | 'company:information:setEdit'
  | 'company:information:isLoading'
  ///
  /// ============================
  /// COMPANY AREAS, POSITION
  /// ============================
  /// - position list
  | 'on:add:position:list:item'
  /// - level position
  | 'company:areas:position:levels:setEdit'

/**
 * All access keys are preceded by the ALT key.
 */
export enum EAccessKey {
  /// ============================
  /// COMPANY AREAS -> POSITION
  /// ============================
  //
  // Remove the las position in the list view
  'on-delete-position-list' = 'l',
  // Go to position levels configuration
  'goto-position-list-levels-view' = 'c',
  // Add new level position
  'on-add-position-list-item' = 'a'
}

function subscribe (eventName: TEventPath, listener: any) {
  document.addEventListener(eventName, listener)
}

function unsubscribe (eventName: TEventPath, listener?: any) {
  document.removeEventListener(eventName, listener)
}

function emit (eventName: TEventPath, data: any) {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}
export { emit, subscribe, unsubscribe }
