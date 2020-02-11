class UpdateStocksColumnToName < ActiveRecord::Migration[6.0]
  def change
    rename_column :stocks, :CreateStocks, :name
  end
end
