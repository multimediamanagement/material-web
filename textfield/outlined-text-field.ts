/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../field/outlined-field.js';

import {customElement} from 'lit/decorators.js';
import {literal} from 'lit/static-html.js';

import {styles as outlinedStyles} from './internal/outlined-styles.css.js';
import {OutlinedTextField} from './internal/outlined-text-field.js';
import {styles as sharedStyles} from './internal/shared-styles.css.js';

export {TextFieldType} from './internal/text-field.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-text-field': MdOutlinedTextField;
  }
}

/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
@customElement('md-outlined-text-field')
export class MdOutlinedTextField extends OutlinedTextField {
  static override styles = [sharedStyles, outlinedStyles];

  protected override readonly fieldTag = literal`md-outlined-field`;
}
