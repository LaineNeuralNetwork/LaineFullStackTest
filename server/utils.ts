import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(__dirname, 'data.json');

export interface Contract {
  id: string;
  clientName: string;
  clientAddress: string;
  contractType: 'Employment Agreement' | 'Loan' | 'Service Agreement';
  contractContent: string;
  createdAt: string;
  updatedAt: string;
}

interface DataFile {
  contracts: Contract[];
}

export const readDataFile = (): DataFile => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { contracts: [] };
  }
};

export const writeDataFile = (data: DataFile): void => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export const generateId = (): string => {
  return (
    Date.now().toString(36) + Math.random().toString(36).substr(2)
  );
};

export const validateContract = (
  contract: Partial<Contract>
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (
    !contract.clientName ||
    typeof contract.clientName !== 'string' ||
    contract.clientName.trim().length === 0
  ) {
    errors.push('Client name is required and must be a non-empty string');
  }

  if (
    !contract.clientAddress ||
    typeof contract.clientAddress !== 'string' ||
    contract.clientAddress.trim().length === 0
  ) {
    errors.push('Client address is required and must be a non-empty string');
  }

  if (
    !contract.contractType ||
    !['Employment Agreement', 'Loan', 'Service Agreement'].includes(contract.contractType)
  ) {
    errors.push('Contract type must be one of: Employment Agreement, Loan, Service Agreement');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
