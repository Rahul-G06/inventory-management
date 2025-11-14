const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Allow JSON body in POST requests
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => console.log("Connection error:", e));

const itemSchema = new mongoose.Schema({
  item_id: String,
  name: String,
  quantity: Number
});

const InventoryModel = mongoose.model("Inventory", itemSchema);

app.post('/inventory', async (req, res) => {
  try {
    const { item_id, name, quantity } = req.body;

    const newItem = new InventoryModel({ item_id, name, quantity });
    await newItem.save();

    res.json({ message: "Item added successfully", item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add item" });
  }
});

// Get all inventory items
app.get('/inventory', async (req, res) => {
  try {
    const items = await InventoryModel.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch inventory data" });
  }
});

// Delete an inventory item by item_id
app.delete('/inventory/:item_id', async (req, res) => {
  try {
    const { item_id } = req.params;
    const deletedItem = await InventoryModel.findOneAndDelete({ item_id });

    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ message: "Item deleted successfully", item: deletedItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete item" });
  }
});

// (Optional but useful) Update item quantity
app.put('/inventory/:item_id', async (req, res) => {
  try {
    const { item_id } = req.params;
    const { name, quantity } = req.body;

    const updatedItem = await InventoryModel.findOneAndUpdate(
      { item_id },
      { name, quantity },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ message: "Item updated successfully", item: updatedItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update item" });
  }
});
