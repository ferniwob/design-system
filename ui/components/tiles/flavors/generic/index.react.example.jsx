/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/components/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';


const image = (
  <SvgIcon className={pf('icon icon-standard-contact')} sprite="standard" symbol="contact" />
);

export default (
<div className='demo-only' style={{width: '400px'}}>
  <MediaObject figureLeft={image} className={pf('tile hint-parent')}>
    <div className={pf('grid grid--align-spread has-flexi-truncate')}>
      <p className={pf('tile__title truncate')}>
        <a href="#">Jack Rogers</a>
      </p>
      <ButtonIcon
        className={pf('shrink-none')}
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </div>
    <div className={pf('tile__detail')}>
      <dl className={pf('dl--horizontal text-body--small')}>
        <dt className={pf('dl--horizontal__label')}>
          <p className={pf('truncate')}>Title:</p>
        </dt>
        <dd className={pf('dl--horizontal__detail tile__meta')}>
          <p className={pf('truncate')}>VP, Facilities</p>
        </dd>
        <dt className={pf('dl--horizontal__label')}>
          <p className={pf('truncate')}>Email:</p>
        </dt>
        <dd className={pf('dl--horizontal__detail tile__meta')}>
          <p className={pf('truncate')}>jrogers@burlingtion.com</p>
        </dd>
        <dt className={pf('dl--horizontal__label')}>
          <p className={pf('truncate')}>Phone:</p>
        </dt>
        <dd className={pf('dl--horizontal__detail tile__meta')}>
          <p className={pf('truncate')}>(415) 444-4444</p>
        </dd>
      </dl>
    </div>
  </MediaObject>
</div>
);
