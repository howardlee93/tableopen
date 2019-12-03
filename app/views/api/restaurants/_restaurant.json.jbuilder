json.extract! restaurant,
:id,
:owner_id,
:name,
:address,
:star,
:city,
:state,
:zipcode,
:phone_number,
:open_time,
:close_time,
:cuisine,
:description,
:logo

if current_user
	json.currentUserLikes !!restaurant.favorites.find_by(user_id: current_user.id)
end