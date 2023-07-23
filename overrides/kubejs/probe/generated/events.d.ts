/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.low_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.chunk_generator", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.27B730C6CD9D0B95", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.height_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.0918A9C44C07BDAB", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.material_condition", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.debug_info.left", handler: (event: Internal.DebugInfoEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.tick", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.material_rule", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.5A366E4203A13F6B", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.placed_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.template_pool", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.categories", handler: (event: Internal.RegisterCategoriesEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.133178A238B859C1", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.4C1076DF982296B9", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.chunk_status", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.47A0C24F3AECBFA4", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.sensor_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_condition_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.7F22AA58E99FC736", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.serializer.special.flag", handler: (event: Internal.SpecialRecipeSerializerManager) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.chest.opened", handler: (event: Internal.ChestEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.0BF86C95521C27FE", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.int_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.entity_types", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.2865FF8522348E3F", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.feature_size_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.5356901F506E6EF2", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.position_source_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.1499D05B176F1757", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.cae.particle_accelerator", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.fluid.any", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "worldgen.remove", handler: (event: Internal.WorldgenRemoveEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.tooltip", handler: (event: Internal.ItemTooltipEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.item", handler: (event: Internal.RegisterItemSubtypeEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.energy_output", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.01401499E60E01BE", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.neighbor_changed.multiblocked.blueprint_table", handler: (event: Internal.NeighborChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.51B16B49FDE64745", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ponder.tag", handler: (event: Internal.PonderItemTagEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.016C5F1E622EC2C3", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.potion_brewing.register", handler: (event: Internal.PotionBrewingRegisterEventForge) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.energy_output", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.dimension_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.attribute", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "worldgen.add", handler: (event: Internal.WorldgenAddEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.cae.arcanereactor", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.energy_output", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.drops", handler: (event: Internal.LivingEntityDropsEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.blueprint_table", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.foliage_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.recipe_serializer", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "fluid.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "level.tick", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.enchantment", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.6787878530AE6E6C", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.entity", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.7F3C5CFB8A64F4F7", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.087EABA1209B88CF", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.item.any", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.blueprint_table_part", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.search_recipe.cae.arcanereactor", handler: (event: Internal.SearchRecipeEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.add.items", handler: (event: Internal.AddJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.blueprint_table", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.7AB8CE7BC9E5F02C", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.recipe_finish_post.cae.particle_accelerator", handler: (event: Internal.RecipeFinishEvent$Post) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.cae.particle_accelerator", handler: (event: Internal.UpdateFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.fluids", handler: (event: Internal.HideJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.1DBA3020E6925F83", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.remove.categories", handler: (event: Internal.RemoveJEICategoriesEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.pos_rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.right_click_empty", handler: (event: Internal.ItemRightClickEmptyEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.paint_screen", handler: (event: Internal.ScreenPaintEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_number_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.arcanreeactor", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.34ED85F71A6B03C8", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.recipe_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.29D9826FFCF678CF", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.block_predicate_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**, **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.hurt", handler: (event: Internal.LivingEntityHurtEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "postinit", handler: (event: Internal.StartupEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.energy_output", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.model_properties", handler: (event: Internal.ItemModelPropertiesEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.forge.loot_modifier_serializers", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.cae.particle_accelerator", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.blueprint_table_part", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.density_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.load", handler: (event: Internal.ServerEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.recipe_catalysts", handler: (event: Internal.RegisterRecipeCatalystsEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_converter_register", handler: (event: Internal.RecipeConverterRegisterEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.cae.arcanereactor", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.high_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "command.registry", handler: (event: Internal.CommandRegistryEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "level.load", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_piece", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.density_function", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "item.entity_interact", handler: (event: Internal.ItemEntityInteractEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.sound_event", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.6787878530AE6E6C", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "entity.loot_tables", handler: (event: Internal.EntityLootEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.particleaccelerator", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.blueprint_table_part", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "block.break", handler: (event: Internal.BlockBreakEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.15BC25A795737D68", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.energy_input", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**, **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "item.right_click", handler: (event: Internal.ItemRightClickEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.placement_modifier_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbchunks.before.claim", handler: (event: Internal.BeforeEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.villager_profession", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.01C8B90F875494CC", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.366D7A329E87A0EB", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.69F58959BAD33533", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.villager_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.change_dimension", handler: (event: Internal.PlayerChangeDimensionEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.runtime", handler: (event: Internal.OnRuntimeAvailableEventJSJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.blueprint_table", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbchunks.after.load", handler: (event: Internal.AfterEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.133178A238B859C1", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.forge.world_types", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.recipe_handler_transfer", handler: (event: Internal.RegisterRecipeTransferHandlersEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.items", handler: (event: Internal.HideJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "item.pickup", handler: (event: Internal.ItemPickupEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.processor_list", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "create.boiler.heater", handler: (event: Internal.BoilerHeaterHandlerEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "block.loot_tables", handler: (event: Internal.BlockLootEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.tool_tiers", handler: (event: Internal.ItemToolTierEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.4B002CA16AA34E59", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.logged_in", handler: (event: Internal.ClientLoggedInEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**, **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "block.right_click", handler: (event: Internal.BlockRightClickEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.subtypes", handler: (event: Internal.JEISubtypesEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.menu", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.potion", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.blueprint_table_part", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.spawned", handler: (event: Internal.EntitySpawnedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.0FE90C09CF064E1B", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.fluid", handler: (event: Internal.RegisterFluidSubtypeEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.neighbor_changed.multiblocked.blueprint_table_part", handler: (event: Internal.NeighborChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.activity", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.byg.villager_trades_item_listing", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**, **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "block.left_click", handler: (event: Internal.BlockLeftClickEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.tick", handler: (event: Internal.ClientTickEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**, **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.death", handler: (event: Internal.LivingEntityDeathEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.cae.arcanereactor", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.modification", handler: (event: Internal.ItemModificationEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.categories_vanilla", handler: (event: Internal.RegisterVanillaCategoryExtensionsEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.noise", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.items", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.trunk_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.multiblocked.controller_tester", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.5A366E4203A13F6B", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.blocks", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "init", handler: (event: Internal.StartupEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.multiblocked.blueprint_table", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "block.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.logged_in", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_pool_entry_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.198BF2A0B3607B14", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.memory_module_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.motive", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.blueprint_table", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.multiblocked.controller_tester", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "chest.loot_tables", handler: (event: Internal.ChestLootEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.block_entity_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.blueprint_table", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.game_events", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_pool_element", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "block.place", handler: (event: Internal.BlockPlaceEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.data_serializers", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.custom_stat", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.stat_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "player.advancement", handler: (event: Internal.PlayerAdvancementEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.cae.particle_accelerator", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.5356901F506E6EF2", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.4B002CA16AA34E59", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.block_state_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.recipes", handler: (event: Internal.RegisterRecipesEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.0BF86C95521C27FE", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.gui", handler: (event: Internal.RegisterGUIHandlersEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.4C1076DF982296B9", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.08A964D1E0EE9F7E", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.78912AEB5A6B7AD0", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.byg.blending_function", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.cae.arcanereactor", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "block.modification", handler: (event: Internal.BlockModificationEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.inventory.changed", handler: (event: Internal.InventoryChangedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.recipe_finish_pre.cae.particle_accelerator", handler: (event: Internal.RecipeFinishEvent$Pre) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.remove.recipes", handler: (event: Internal.RemoveJEIRecipesEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "gift.loot_tables", handler: (event: Internal.GiftLootEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.particle_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "fishing.loot_tables", handler: (event: Internal.FishingLootEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbchunks.before.load", handler: (event: Internal.BeforeEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.mob_effect", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "lootjs", handler: (event: Internal.LootModificationForgeEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.search_recipe.cae.particle_accelerator", handler: (event: Internal.SearchRecipeEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.controller_tester", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.01401499E60E01BE", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_score_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.51B16B49FDE64745", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.wanderer.trades", handler: (event: Internal.WandererTradingEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.noise_settings", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.point_of_interest_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.tick", handler: (event: Internal.ServerEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbchunks.after.claim", handler: (event: Internal.AfterEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.type_registry", handler: (event: Internal.RecipeTypeRegistryEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.structure.load", handler: (event: Internal.StructureLoadEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "sound.registry", handler: (event: Internal.SoundRegistryEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_placement", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.compostables", handler: (event: Internal.CompostablesRecipeEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.7F3C5CFB8A64F4F7", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.armor_tiers", handler: (event: Internal.ItemArmorTierEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.biome_source", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.generate_assets", handler: (event: Internal.ClientGenerateAssetsEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.energy_output", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.inventory.opened", handler: (event: Internal.InventoryEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.multiblocked.blueprint_table", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_nbt_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.01C8B90F875494CC", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "item.destroyed", handler: (event: Internal.ItemDestroyedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.information", handler: (event: Internal.InformationJEIEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.blueprint_table_part", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "generic.loot_tables", handler: (event: Internal.GenericLootEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "morejs.player.xp_change", handler: (event: Internal.ExperiencePlayerEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.painter_updated", handler: (event: Internal.PainterUpdatedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.add.fluids", handler: (event: Internal.AddJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.67FE8A993349CD5C", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.float_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.69F58959BAD33533", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.last", handler: (event: Internal.DataPackEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.villager.trades", handler: (event: Internal.VillagerTradingEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.schedule", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.custom", handler: (event: Internal.HideCustomJEIEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.debug_info.right", handler: (event: Internal.DebugInfoEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.7AB8CE7BC9E5F02C", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.energy_input", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_processor", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ponder.registry", handler: (event: Internal.PonderRegistryEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "item.toss", handler: (event: Internal.ItemTossEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.left_click", handler: (event: Internal.ItemLeftClickEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "create.pipe.fluid_effect", handler: (event: Internal.SpecialFluidHandlerEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.cae.arcanereactor", handler: (event: Internal.UpdateFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.cae.arcanereactor", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.init", handler: (event: Internal.ClientEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "command.run", handler: (event: Internal.CommandEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.705C99396B9CF976", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_set", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.cae.particle_accelerator", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.tree_decorator_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.crafted", handler: (event: Internal.ItemCraftedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.check_spawn", handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.cae.particle_accelerator", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.366D7A329E87A0EB", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.cae.particle_accelerator", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.inventory.closed", handler: (event: Internal.InventoryEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.entity", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.78912AEB5A6B7AD0", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.completed.34ED85F71A6B03C8", handler: (event: Internal.QuestObjectCompletedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.advanced", handler: (event: Internal.RegisterAdvancedEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "create.spout.special", handler: (event: Internal.SpecialSpoutHandlerEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.register.ingredients", handler: (event: Internal.RegisterIngredientsEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.entity", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.cae.arcanereactor", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.fluids", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.cae.particle_accelerator", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.cae.arcanereactor", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.entity", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.item.any", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.fluid.any", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.chest.closed", handler: (event: Internal.ChestEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "ftbquests.custom_task.137627C88E95B2C0", handler: (event: Internal.CustomTaskEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.1499D05B176F1757", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ftbquests.started.17857EFAF14FF861", handler: (event: Internal.QuestObjectStartedEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.setup_recipe.cae.particle_accelerator", handler: (event: Internal.SetupRecipeEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.biome", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.first", handler: (event: Internal.DataPackEventJS) => void);
declare function onEvent(name: `mbd.structure_formed`, handler: (event: Internal.StructureFormedEvent) => void);
declare function onEvent(name: `ftbquests.completed`, handler: (event: Internal.QuestObjectCompletedEventJS) => void);
declare function onEvent(name: `ftbquests.started`, handler: (event: Internal.QuestObjectStartedEventJS) => void);
declare function onEvent(name: `mbd.read_initial_data`, handler: (event: Internal.ReadInitialDataEvent) => void);
declare function onEvent(name: `ftbquests.custom_task`, handler: (event: Internal.CustomTaskEventJS) => void);
declare function onEvent(name: `mbd.update_tick`, handler: (event: Internal.UpdateTickEvent) => void);
declare function onEvent(name: `mbd.part_added`, handler: (event: Internal.PartAddedEvent) => void);
declare function onEvent(name: `mbd.update_renderer`, handler: (event: Internal.UpdateRendererEvent) => void);
declare function onEvent(name: `mbd.search_recipe`, handler: (event: Internal.SearchRecipeEvent) => void);
declare function onEvent(name: `mbd.dynamic_pattern`, handler: (event: Internal.DynamicPatternEvent) => void);
declare function onEvent(name: `mbd.status_changed`, handler: (event: Internal.StatusChangedEvent) => void);
declare function onEvent(name: `mbd.write_initial_data`, handler: (event: Internal.WriteInitialDataEvent) => void);
declare function onEvent(name: `mbd.neighbor_changed`, handler: (event: Internal.NeighborChangedEvent) => void);
declare function onEvent(name: `mbd.recipe_finish_pre`, handler: (event: Internal.RecipeFinishEvent$Pre) => void);
declare function onEvent(name: `mbd.recipe_finish_post`, handler: (event: Internal.RecipeFinishEvent$Post) => void);
declare function onEvent(name: `mbd.setup_recipe`, handler: (event: Internal.SetupRecipeEvent) => void);
declare function onEvent(name: `mbd.update_formed`, handler: (event: Internal.UpdateFormedEvent) => void);
declare function onEvent(name: `mbd.recipe_ui`, handler: (event: Internal.RecipeUIEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$LoadFromFile", handler: (event: Internal.PlayerEvent$LoadFromFile) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogColors", handler: (event: Internal.EntityViewRenderEvent$FogColors) => void);
declare function onForgeEvent(name: "mcp.mobius.waila.api.event.WailaRenderEvent$Color", handler: (event: Internal.WailaRenderEvent$Color) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickItem", handler: (event: Internal.PlayerInteractEvent$RightClickItem) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck", handler: (event: Internal.PlayerEvent$HarvestCheck) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StopTracking", handler: (event: Internal.PlayerEvent$StopTracking) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Post", handler: (event: Internal.ScreenEvent$DrawScreenEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerChangeGameTypeEvent", handler: (event: Internal.ClientPlayerChangeGameTypeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$CameraSetup", handler: (event: Internal.EntityViewRenderEvent$CameraSetup) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseScrollEvent", handler: (event: Internal.InputEvent$MouseScrollEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangeGameModeEvent", handler: (event: Internal.PlayerEvent$PlayerChangeGameModeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlayStreamingSourceEvent", handler: (event: Internal.PlayStreamingSourceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.EntityItemPickupEvent", handler: (event: Internal.EntityItemPickupEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderBlockOverlayEvent", handler: (event: Internal.RenderBlockOverlayEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$AllowDespawn", handler: (event: Internal.LivingSpawnEvent$AllowDespawn) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingHealEvent", handler: (event: Internal.LivingHealEvent) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.HUDOverlayEvent$Exhaustion", handler: (event: Internal.HUDOverlayEvent$Exhaustion) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.modifiers.ModifierManager$ModifiersLoadedEvent", handler: (event: Internal.ModifierManager$ModifiersLoadedEvent) => void);
declare function onForgeEvent(name: "com.simibubi.create.api.event.TileEntityBehaviourEvent", handler: (event: Internal.TileEntityBehaviourEvent<any>) => void);
declare function onForgeEvent(name: "net.mehvahdjukaar.selene.villager_ai.VillagerBrainEvent", handler: (event: Internal.VillagerBrainEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Pre", handler: (event: Internal.ScreenEvent$MouseClickedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$RenderFogEvent", handler: (event: Internal.EntityViewRenderEvent$RenderFogEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: Internal.TagsUpdatedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingVisibilityEvent", handler: (event: Internal.LivingEvent$LivingVisibilityEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Post", handler: (event: Internal.ScreenEvent$MouseReleasedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingGetProjectileEvent", handler: (event: Internal.LivingGetProjectileEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityLeaveWorldEvent", handler: (event: Internal.EntityLeaveWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.DrawSelectionEvent$HighlightBlock", handler: (event: Internal.DrawSelectionEvent$HighlightBlock) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", handler: (event: Internal.PlayerInteractEvent$LeftClickBlock) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PostLayer", handler: (event: Internal.RenderGameOverlayEvent$PostLayer) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityMobGriefingEvent", handler: (event: Internal.EntityMobGriefingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$ClickInputEvent", handler: (event: Internal.InputEvent$ClickInputEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ContainerScreenEvent$DrawBackground", handler: (event: Internal.ContainerScreenEvent$DrawBackground) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Post", handler: (event: Internal.RenderGameOverlayEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.PlaySoundAtEntityEvent", handler: (event: Internal.PlaySoundAtEntityEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Post", handler: (event: Internal.ScreenEvent$MouseClickedEvent$Post) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.BlockStateChangeEvent", handler: (event: Internal.BlockStateChangeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EntityConstructing", handler: (event: Internal.EntityEvent$EntityConstructing) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.RenderHandItemEvent$Post", handler: (event: Internal.RenderHandItemEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenOpenEvent", handler: (event: Internal.ScreenOpenEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: Internal.RenderArmEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.CriticalHitEvent", handler: (event: Internal.CriticalHitEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogDensity", handler: (event: Internal.EntityViewRenderEvent$FogDensity) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.RandomTickEvent$Block", handler: (event: Internal.RandomTickEvent$Block) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseDragEvent$Post", handler: (event: Internal.ScreenEvent$MouseDragEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: Internal.PlayerContainerEvent$Close) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.FOVModifierEvent", handler: (event: Internal.FOVModifierEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderPlayerEvent$Post", handler: (event: Internal.RenderPlayerEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract", handler: (event: Internal.PlayerInteractEvent$EntityInteract) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BiomeLoadingEvent", handler: (event: Internal.BiomeLoadingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityTravelToDimensionEvent", handler: (event: Internal.EntityTravelToDimensionEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegistryEvent$IdMappingEvent", handler: (event: Internal.RegistryEvent$IdMappingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$SpecialSpawn", handler: (event: Internal.LivingSpawnEvent$SpecialSpawn) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.item.ItemExpireEvent", handler: (event: Internal.ItemExpireEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$EntityPlaceEvent", handler: (event: Internal.BlockEvent$EntityPlaceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseDragEvent$Pre", handler: (event: Internal.ScreenEvent$MouseDragEvent$Pre) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.BeginFrameEvent", handler: (event: Internal.BeginFrameEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerNegotiationEvent", handler: (event: Internal.PlayerNegotiationEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardCharTypedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardCharTypedEvent$Post) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.LivingEntityTickEndEvent", handler: (event: Internal.LivingEntityTickEndEvent) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.RenderLayerEvent", handler: (event: Internal.RenderLayerEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseScrollEvent$Post", handler: (event: Internal.ScreenEvent$MouseScrollEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Handler", handler: (event: Internal.PermissionGatherEvent$Handler) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$TabListNameFormat", handler: (event: Internal.PlayerEvent$TabListNameFormat) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.ChunkFullyLoadedEvent", handler: (event: Internal.ChunkFullyLoadedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$RespawnEvent", handler: (event: Internal.ClientPlayerNetworkEvent$RespawnEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.DrawSelectionEvent$HighlightEntity", handler: (event: Internal.DrawSelectionEvent$HighlightEntity) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.FoodValuesEvent", handler: (event: Internal.FoodValuesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$ItemPickupEvent", handler: (event: Internal.PlayerEvent$ItemPickupEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$KeyInputEvent", handler: (event: Internal.InputEvent$KeyInputEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.RenderHandItemEvent$Pre", handler: (event: Internal.RenderHandItemEvent$Pre) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.MaterialsLoadedEvent", handler: (event: Internal.MaterialsLoadedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardCharTypedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardCharTypedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FieldOfView", handler: (event: Internal.EntityViewRenderEvent$FieldOfView) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: Internal.ClientChatReceivedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseScrollEvent$Pre", handler: (event: Internal.ScreenEvent$MouseScrollEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Pre", handler: (event: Internal.ScreenEvent$InitScreenEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Pre", handler: (event: Internal.RenderGameOverlayEvent$Pre) => void);
declare function onForgeEvent(name: "com.anthonyhilyard.iceberg.events.RenderTooltipExtEvent$Post", handler: (event: Internal.RenderTooltipExtEvent$Post) => void);
declare function onForgeEvent(name: "me.desht.pneumaticcraft.api.heat.HeatRegistrationEvent", handler: (event: Internal.HeatRegistrationEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$CreateFluidSourceEvent", handler: (event: Internal.BlockEvent$CreateFluidSourceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundEvent", handler: (event: Internal.PlaySoundEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: Internal.RenderTooltipEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Unload", handler: (event: Internal.WorldEvent$Unload) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void);
declare function onForgeEvent(name: "com.anthonyhilyard.iceberg.events.CriterionEvent", handler: (event: Internal.CriterionEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Post", handler: (event: Internal.RenderLivingEvent$Post<any, any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardKeyPressedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionRemoveEvent", handler: (event: Internal.PotionEvent$PotionRemoveEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", handler: (event: Internal.PlayerEvent$PlayerChangedDimensionEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty", handler: (event: Internal.PlayerInteractEvent$RightClickEmpty) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: Internal.LivingFallEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerXpEvent$XpChange", handler: (event: Internal.PlayerXpEvent$XpChange) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Save", handler: (event: Internal.ChunkDataEvent$Save) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.ToolEquipmentChangeEvent", handler: (event: Internal.ToolEquipmentChangeEvent) => void);
declare function onForgeEvent(name: "mcp.mobius.waila.api.event.WailaRenderEvent$Post", handler: (event: Internal.WailaRenderEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent", handler: (event: Internal.FurnaceFuelBurnTimeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$UnWatch", handler: (event: Internal.ChunkWatchEvent$UnWatch) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseInputEvent", handler: (event: Internal.InputEvent$MouseInputEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.BlockSetEvent", handler: (event: Internal.BlockSetEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: Internal.RenderHandEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.FillBucketEvent", handler: (event: Internal.FillBucketEvent) => void);
declare function onForgeEvent(name: "org.infernalstudios.infernalexp.events.PostRightClickBlockEvent", handler: (event: Internal.PostRightClickBlockEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$FluidPlaceBlockEvent", handler: (event: Internal.BlockEvent$FluidPlaceBlockEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.EntityTickEvent", handler: (event: Internal.EntityTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Pre", handler: (event: Internal.RenderLivingEvent$Pre<any, any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$Watch", handler: (event: Internal.ChunkWatchEvent$Watch) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderNameplateEvent", handler: (event: Internal.RenderNameplateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: Internal.ServerStartedEvent) => void);
declare function onForgeEvent(name: "com.supermartijn642.core.render.RenderWorldEvent", handler: (event: Internal.RenderWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityJoinWorldEvent", handler: (event: Internal.EntityJoinWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$PotentialSpawns", handler: (event: Internal.WorldEvent$PotentialSpawns) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardKeyReleasedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$WorldTickEvent", handler: (event: Internal.TickEvent$WorldTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: Internal.RegisterClientCommandsEvent) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.TooltipOverlayEvent$Render", handler: (event: Internal.TooltipOverlayEvent$Render) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.DifficultyChangeEvent", handler: (event: Internal.DifficultyChangeEvent) => void);
declare function onForgeEvent(name: "com.anthonyhilyard.iceberg.events.NewItemPickupEvent", handler: (event: Internal.NewItemPickupEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Load", handler: (event: Internal.WorldEvent$Load) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.item.ItemTossEvent", handler: (event: Internal.ItemTossEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$CheckSpawn", handler: (event: Internal.LivingSpawnEvent$CheckSpawn) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: Internal.ServerAboutToStartEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.SetupLivingBipedAnimEvent$Post", handler: (event: Internal.SetupLivingBipedAnimEvent$Post) => void);
declare function onForgeEvent(name: "mcp.mobius.waila.api.event.WailaRayTraceEvent", handler: (event: Internal.WailaRayTraceEvent) => void);
declare function onForgeEvent(name: "mcp.mobius.waila.api.event.WailaTooltipEvent", handler: (event: Internal.WailaTooltipEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelLastEvent", handler: (event: Internal.RenderLevelLastEvent) => void);
declare function onForgeEvent(name: "com.hollingsworth.arsnouveau.api.event.ManaRegenCalcEvent", handler: (event: Internal.ManaRegenCalcEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty", handler: (event: Internal.PlayerInteractEvent$LeftClickEmpty) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: Internal.EntityEvent$Size) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedInEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedInEvent) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.TooltipOverlayEvent$Pre", handler: (event: Internal.TooltipOverlayEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Load", handler: (event: Internal.ChunkEvent$Load) => void);
declare function onForgeEvent(name: "net.blay09.mods.cookingforblockheads.api.event.FoodRegistryInitEvent", handler: (event: Internal.FoodRegistryInitEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$BreakEvent", handler: (event: Internal.BlockEvent$BreakEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.AttackEntityEvent", handler: (event: Internal.AttackEntityEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void);
declare function onForgeEvent(name: "shadows.placebo.events.ItemUseEvent", handler: (event: Internal.ItemUseEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.MovementInputUpdateEvent", handler: (event: Internal.MovementInputUpdateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock", handler: (event: Internal.PlayerInteractEvent$RightClickBlock) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.AdvancementEvent", handler: (event: Internal.AdvancementEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Pre", handler: (event: Internal.ScreenEvent$MouseReleasedEvent$Pre) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.SetupLivingBipedAnimEvent$Pre", handler: (event: Internal.SetupLivingBipedAnimEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Chat", handler: (event: Internal.RenderGameOverlayEvent$Chat) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedOutEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedOutEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: Internal.RenderLevelStageEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardKeyPressedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Pre", handler: (event: Internal.ScreenEvent$DrawScreenEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: Internal.PermissionGatherEvent$Nodes) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingPackSizeEvent", handler: (event: Internal.LivingPackSizeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent", handler: (event: Internal.LivingEvent$LivingJumpEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerFlyableFallEvent", handler: (event: Internal.PlayerFlyableFallEvent) => void);
declare function onForgeEvent(name: "net.mehvahdjukaar.selene.resourcepack.EarlyPackReloadEvent", handler: (event: Internal.EarlyPackReloadEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PreLayer", handler: (event: Internal.RenderGameOverlayEvent$PreLayer) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$NameFormat", handler: (event: Internal.PlayerEvent$NameFormat) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.HUDOverlayEvent$Saturation", handler: (event: Internal.HUDOverlayEvent$Saturation) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void);
declare function onForgeEvent(name: "com.hollingsworth.arsnouveau.api.event.MaxManaCalcEvent", handler: (event: Internal.MaxManaCalcEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Save", handler: (event: Internal.WorldEvent$Save) => void);
declare function onForgeEvent(name: "mcp.mobius.waila.api.event.WailaRenderEvent$Pre", handler: (event: Internal.WailaRenderEvent$Pre) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.ReloadRenderersEvent", handler: (event: Internal.ReloadRenderersEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: Internal.ServerStartingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$RawMouseEvent", handler: (event: Internal.InputEvent$RawMouseEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.ItemEntityTickEndEvent", handler: (event: Internal.ItemEntityTickEndEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.VanillaGameEvent", handler: (event: Internal.VanillaGameEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific", handler: (event: Internal.PlayerInteractEvent$EntityInteractSpecific) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$CropGrowEvent$Pre", handler: (event: Internal.BlockEvent$CropGrowEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$CropGrowEvent$Post", handler: (event: Internal.BlockEvent$CropGrowEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$BackgroundDrawnEvent", handler: (event: Internal.ScreenEvent$BackgroundDrawnEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ContainerScreenEvent$DrawForeground", handler: (event: Internal.ContainerScreenEvent$DrawForeground) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$Color", handler: (event: Internal.RenderTooltipEvent$Color) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityTeleportEvent$TeleportCommand", handler: (event: Internal.EntityTeleportEvent$TeleportCommand) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderPlayerEvent$Pre", handler: (event: Internal.RenderPlayerEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Text", handler: (event: Internal.RenderGameOverlayEvent$Text) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardKeyReleasedEvent$Post) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.RandomTickEvent$Fluid", handler: (event: Internal.RandomTickEvent$Fluid) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EnteringSection", handler: (event: Internal.EntityEvent$EnteringSection) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AttachCapabilitiesEvent", handler: (event: Internal.AttachCapabilitiesEvent<any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: Internal.ItemAttributeModifierEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", handler: (event: Internal.RenderTooltipEvent$GatherComponents) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: Internal.LivingHurtEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundSourceEvent", handler: (event: Internal.PlaySoundSourceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$SaveToFile", handler: (event: Internal.PlayerEvent$SaveToFile) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$NeighborNotifyEvent", handler: (event: Internal.BlockEvent$NeighborNotifyEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Post", handler: (event: Internal.ScreenEvent$InitScreenEvent$Post) => void);
declare function onForgeEvent(name: "net.blay09.mods.waystones.api.KnownWaystonesEvent", handler: (event: Internal.KnownWaystonesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingUpdateEvent", handler: (event: Internal.LivingEvent$LivingUpdateEvent) => void);
declare function onEvent(name: "minecraft.sound_event.registry", handler: (event: Registry.SoundEvent) => void);
declare function onEvent(name: "sound_event.registry", handler: (event: Registry.SoundEvent) => void);
declare function onEvent(name: "minecraft.fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "minecraft.block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "minecraft.item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "minecraft.enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "minecraft.mob_effect.registry", handler: (event: Registry.MobEffect) => void);
declare function onEvent(name: "mob_effect.registry", handler: (event: Registry.MobEffect) => void);
declare function onEvent(name: "minecraft.entity_type.registry", handler: (event: Registry.EntityType) => void);
declare function onEvent(name: "entity_type.registry", handler: (event: Registry.EntityType) => void);
declare function onEvent(name: "minecraft.block_entity_type.registry", handler: (event: Registry.BlockEntityType) => void);
declare function onEvent(name: "block_entity_type.registry", handler: (event: Registry.BlockEntityType) => void);
declare function onEvent(name: "minecraft.potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "minecraft.particle_type.registry", handler: (event: Registry.ParticleType) => void);
declare function onEvent(name: "particle_type.registry", handler: (event: Registry.ParticleType) => void);
declare function onEvent(name: "minecraft.motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "minecraft.custom_stat.registry", handler: (event: Registry.CustomStat) => void);
declare function onEvent(name: "custom_stat.registry", handler: (event: Registry.CustomStat) => void);
declare function onEvent(name: "minecraft.point_of_interest_type.registry", handler: (event: Registry.PointOfInterestType) => void);
declare function onEvent(name: "point_of_interest_type.registry", handler: (event: Registry.PointOfInterestType) => void);
declare function onEvent(name: "minecraft.villager_type.registry", handler: (event: Registry.VillagerType) => void);
declare function onEvent(name: "villager_type.registry", handler: (event: Registry.VillagerType) => void);
declare function onEvent(name: "minecraft.villager_profession.registry", handler: (event: Registry.VillagerProfession) => void);
declare function onEvent(name: "villager_profession.registry", handler: (event: Registry.VillagerProfession) => void);
