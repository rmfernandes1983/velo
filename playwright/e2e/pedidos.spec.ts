import { test, expect } from '@playwright/test';

test('deve consultar um pedido aprovado', async ({ page }) => {
  //arrange
  await page.goto('http://localhost:5173/');  
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  //act
  
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-XGJYNQ');
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();

//assert
/*  
  await expect(page.getByTestId('order-result-id')).toBeVisible({ timeout: 10_000 });
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-XGJYNQ');

  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
*/

  await expect(page.getByText('VLO-XGJYNQ')).toBeVisible({ timeout: 10_000 });

  await expect(page.getByText('APROVADO')).toBeVisible();

});