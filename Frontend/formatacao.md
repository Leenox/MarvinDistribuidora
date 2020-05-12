# Formatação de números

## app.module.ts

```
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localePt, 'pt-BR');


providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],

```

## no Html

```
{{p.valor | currency:'BRL':true}}

```