export interface IAnimationOptions {
  /**
   * Name of the animation anchor that will be used in a template
   */
  anchor?: string;
  /**
   * Duration in ms
   */
  duration?: number;
  /**
   * Delay in ms
   *
   * Default: 0
   */
  delay?: number;
  /**
 * Delay in ms
 *
 * Default: ease
 */
  easing?: string;

  /**
   * This parameter can only be set in a component's decorator.
   * Cannot be set in a template.
   *
   * Whether children animation should run 'before', 'together' or 'after' animation.
   * When set to 'none' chldren are not animated.
   *
   * Default: 'together'
   */
  animateChildren?: 'before' | 'together' | 'after' | 'none';
}

export interface IAttentionSeekerAnimationOptions extends IAnimationOptions {
  /**
   * Indicates the direction of the state change expression in attention seekers.
   *
   * <=> is bidirectional (triggers whenever the state changes)
   * => unidirectional (triggers whenever the state changes from false to true)
   *
   * Cannot be dynamic
   */
  direction?: '<=>' | '=>';
}



export interface IFlipAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees at which end animation.
   *
   * Default 90
   */
  degrees?: number;
}
