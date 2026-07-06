# frozen_string_literal: true

# Typed models for the UserDataScraper SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# UserData entity data model.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
UserData = Struct.new(
  :date,
  :name,
  keyword_init: true
)

# Request payload for UserData#list.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
UserDataListMatch = Struct.new(
  :date,
  :name,
  keyword_init: true
)

