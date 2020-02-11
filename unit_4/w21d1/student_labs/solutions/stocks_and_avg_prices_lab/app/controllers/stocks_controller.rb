class StocksController < ApplicationController
    before_action :set_location, only: [:show]

    def index
        @stocks = Stock.all
        render json: {status: 200, stocks: @stocks }
    end

    def show 
        prices = @stock.prices
        render json: { status: 200, stock: {
            stock_info: @stock,
            stock_prices: prices
        }}
    end

    private
        def set_location
            @stock = Stock.find(params[:id])
        end
end
