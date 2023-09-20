// NOTE:
// get the icons from https://icones.js.org/ or https://www.svgrepo.com/
// make sure to edit the BOX to have correct display

type Icon = {
  box_width: number;
  box_height?: number;
  svg: string;
};

interface Icons {
  [key: string]: Icon;
}

export const ICONS: Icons = {
  topo: {
    box_width: 25,
    svg: `<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path  stroke="#000000" d="M12.6,23.6C12.4,23.6,12.1,23.6,11.9,23.6C4.5,23.1,2,17.6,2.200000000000001,12.700000000000001C2.4,7.2,5.6,1.4,11.4,1.4C13.3,1.4,16.6,2.5999999999999996,19.3,5.199999999999999C22.6,8.299999999999999,23.700000000000003,13.399999999999999,22.1,17.5C20.6,21.1,16.7,23.6,12.6,23.6ZM11.4,2.4C6.300000000000001,2.4,3.4000000000000004,7.800000000000001,3.200000000000001,12.8C3.100000000000001,15,3.500000000000001,22.1,12.000000000000002,22.700000000000003C12.200000000000001,22.700000000000003,12.400000000000002,22.700000000000003,12.700000000000001,22.700000000000003C16.400000000000002,22.700000000000003,19.900000000000002,20.400000000000002,21.200000000000003,17.1C22.700000000000003,13.400000000000002,21.700000000000003,8.8,18.700000000000003,5.900000000000002C15.9,3.3,12.8,2.4,11.4,2.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path><path  stroke="#000000" d="M13,20.3C12.8,20.3,12.7,20.3,12.5,20.3C6.8,19.900000000000002,4.8,16.200000000000003,4.9,12.9C5,9.1,7.9,4.9,12,4.9C13.8,4.9,15.5,5.7,17.2,7.300000000000001C19.4,9.4,20.2,13.100000000000001,18.9,16.1C17.9,18.8,15.7,20.3,13,20.3ZM12,5.9C8.6,5.9,6,9.600000000000001,5.9,13C5.800000000000001,16.7,8.2,19,12.5,19.3C15,19.5,17,18.2,18,15.700000000000001C19.1,13,18.5,9.8,16.5,8C15,6.6,13.5,5.9,12,5.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path><path  stroke="#000000" d="M12.5,17.1C10.4,17.1,8.3,15.8,7.5,14.100000000000001C7.2,13.3,6.8,11.600000000000001,8.7,9.700000000000001C9.5,8.9,10.6,8.4,11.7,8.4C13.799999999999999,8.4,16.2,10,16.299999999999997,12.600000000000001H16.299999999999997L16.299999999999997,13.200000000000001C16.2,16,14.3,17.1,12.5,17.1L12.5,17.1ZM11.8,9.4C11.200000000000001,9.4,10.3,9.6,9.5,10.4C8.4,11.5,8.1,12.600000000000001,8.5,13.7C9.1,15.1,10.8,16.099999999999998,12.5,16.099999999999998L12.5,16.099999999999998C14.3,16.099999999999998,15.4,14.899999999999999,15.4,12.799999999999997C15.4,10.7,13.5,9.4,11.8,9.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1; fill-opacity: 1;" fill-opacity="1"></path>`
  },
  hamburger: {
    box_width: 15,
    svg: `<path d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z" "></path>`
  },
  flag_vi: {
    box_width: 32,
    box_height: 24,
    svg: `<defs><path id="flagpackVn0" fill="#fff" d="M0 0h32v24H0z"/></defs><g fill="none"><g clip-path="url(#flagpackVn2)"><use href="#flagpackVn0"/><path fill="#F7FCFF" fill-rule="evenodd" d="M0 0h32v24H0V0Z" clip-rule="evenodd"/><path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24h32V0H0Z" clip-rule="evenodd"/><mask id="flagpackVn1" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0H0Z" clip-rule="evenodd"/></mask><g mask="url(#flagpackVn1)"><path fill="#FFD221" fill-rule="evenodd" d="m16.062 15.98l-5.15 3.275l1.727-5.733l-3.674-3.746l5.065-.11l2.241-5.66l2.042 5.734l5.053.089l-3.797 3.814l1.773 5.454l-5.28-3.117Z" clip-rule="evenodd"/></g></g><defs><clipPath id="flagpackVn2"><use href="#flagpackVn0"/></clipPath></defs></g>
    `
  }
};
