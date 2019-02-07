/* eslint-disable default-case */
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export const collectIdsAndData = doc => ({ id: doc.id, ...doc.data() });
export const bagel = obj => {
  let bagel = 0;
  Object.values(obj).map(i => {
    if (i === "") {
      bagel++;
    }
  });
  return bagel;
};

export const waffle = obj => {
  let bagel = 0;
  Object.values(obj)
    .splice(0, 6)
    .map(i => {
      if (i === "") {
        bagel++;
      }
    });
  return bagel;
};

export const dutyCheck1 = obj => {
  let bagel = [];
  let waffle = Object.values(obj).splice(7, 11);

  waffle[0] === ""
    ? (bagel = css`
        display: none;
      `)
    : (bagel = css`
        font-size: 15px;
      `);

  return bagel;
};

export const dutyCheck2 = obj => {
  let bagel = [];
  let waffle = Object.values(obj).splice(7, 11);

  waffle[1] === ""
    ? (bagel = css`
        display: none;
      `)
    : (bagel = css`
        font-size: 15px;
      `);

  return bagel;
};

export const dutyCheck3 = obj => {
  let bagel = [];
  let waffle = Object.values(obj).splice(7, 11);

  waffle[2] === ""
    ? (bagel = css`
        display: none;
      `)
    : (bagel = css`
        font-size: 15px;
      `);

  return bagel;
};

export const dutyCheck4 = obj => {
  let bagel = [];
  let waffle = Object.values(obj).splice(7, 11);

  waffle[3] === ""
    ? (bagel = css`
        display: none;
      `)
    : (bagel = css`
        font-size: 15px;
      `);

  return bagel;
};
