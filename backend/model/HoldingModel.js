const { model } = require(mongoose);

const {HoldingSchema} = require('../schemas/HoldingsSchema');

const holdingModel=  new model ("holding",HoldingSchema);

model.export={holdingModel};

