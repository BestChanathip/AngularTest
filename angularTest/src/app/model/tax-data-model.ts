export interface TaxData {
    filingType?: string;
    month?: string;
    year?: string;
    saleAmount?: number;
    taxAmount?: number;
    surcharge?: number;
    penalty?: number;
    totalAmount?: number;

    saleAmountCurrency?: string;
    taxAmountCurrency?: string;
    surchargeCurrency?: string;
    penaltyCurrency?: string;
    totalAmountCurrency?: string;
  }
  