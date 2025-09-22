import { useState, useMemo } from 'react';

export interface CalculatorParams {
  principal: number;
  rate: number;
  time: number;
  compounding: 'monthly' | 'quarterly' | 'annually';
}

export interface CalculatorResult {
  finalAmount: number;
  totalInterest: number;
  monthlyBreakdown: Array<{
    month: number;
    balance: number;
    interest: number;
  }>;
}

export const useCalculator = () => {
  const [params, setParams] = useState<CalculatorParams>({
    principal: 1000,
    rate: 12,
    time: 12,
    compounding: 'monthly'
  });

  const updateParams = (newParams: Partial<CalculatorParams>) => {
    setParams(prev => ({ ...prev, ...newParams }));
  };

  const resetCalculator = () => {
    setParams({
      principal: 1000,
      rate: 12,
      time: 12,
      compounding: 'monthly'
    });
  };

  const isValid = useMemo(() => {
    return params.principal > 0 && params.rate > 0 && params.time > 0;
  }, [params]);

  const result = useMemo((): CalculatorResult | null => {
    if (!isValid) return null;

    const { principal, rate, time, compounding } = params;
    
    // Convert annual rate to decimal
    const annualRate = rate / 100;
    
    // Determine compounding frequency
    const compoundingFrequency = {
      monthly: 12,
      quarterly: 4,
      annually: 1
    }[compounding];

    // Calculate compound interest
    const finalAmount = principal * Math.pow(
      1 + (annualRate / compoundingFrequency),
      compoundingFrequency * (time / 12)
    );

    const totalInterest = finalAmount - principal;

    // Generate monthly breakdown
    const monthlyBreakdown = [];
    for (let month = 1; month <= time; month++) {
      const monthlyBalance = principal * Math.pow(
        1 + (annualRate / compoundingFrequency),
        compoundingFrequency * (month / 12)
      );
      const monthlyInterest: number = monthlyBalance - (month === 1 ? principal : monthlyBreakdown[month - 2].balance);
      
      monthlyBreakdown.push({
        month,
        balance: Math.round(monthlyBalance * 100) / 100,
        interest: Math.round(monthlyInterest * 100) / 100
      });
    }

    return {
      finalAmount: Math.round(finalAmount * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      monthlyBreakdown
    };
  }, [params, isValid]);

  return {
    params,
    result,
    updateParams,
    resetCalculator,
    isValid
  };
};