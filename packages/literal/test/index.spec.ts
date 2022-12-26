/******************************************************************
 * Copyright (C) 2022 LvChengbin
 *
 * File: test/index.spec.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/26/2022
 * Description:
 ******************************************************************/

import { init } from '../src';

describe( '@literal/core', () => {

    it( 'init', () => {
        expect( init() ).toEqual( true );
    } );
} );
