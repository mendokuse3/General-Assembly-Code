class RemoveColumnFromAvg < ActiveRecord::Migration[6.0]
  def change
    remove_column :average_prices, :stock_id
  end
end
