-- ==============================================================================
-- FoodGo Flyway Migration: V2 Seed Initial Data
-- ==============================================================================
-- Safely seeds initial categories using ON CONFLICT DO NOTHING

INSERT INTO categories (name, description, is_active)
VALUES 
    ('Pizza', 'Hand-tossed and stone-baked authentic pizzas', true),
    ('Burgers', 'Juicy gourmet burgers with premium ingredients', true),
    ('Biryani', 'Aromatic spiced rice layered with tender meat or vegetables', true),
    ('Chinese', 'Wok-tossed noodles, manchurian, and flavorful stir-fries', true),
    ('South Indian', 'Classic dosas, idlis, and authentic southern meals', true),
    ('North Indian', 'Rich curries, tandoori breads, and flavorful gravies', true),
    ('Desserts', 'Sweet treats, ice creams, and baked goods', true),
    ('Beverages', 'Refreshing shakes, juices, and cold drinks', true)
ON CONFLICT (name) DO NOTHING;
