'use server';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// get latest prosduts
export async function getLatestProsucts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(data);
}

// Get single product by its slug 
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug},
  });
}