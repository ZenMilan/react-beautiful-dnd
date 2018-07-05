// @flow
import invariant from 'tiny-invariant';

export default (ref: ?mixed) => {
  const isAHTMLElement: boolean = ref instanceof HTMLElement;
  // $FlowFixMe - flow does not understand what a SVGElement is
  const isASVGElement: boolean = ref instanceof SVGElement;
  invariant(
    isAHTMLElement || isASVGElement,
    `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md
  `,
  );
};
