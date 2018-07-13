var combat= function(health, damage) {
  if((health-damage)<=0) return 0;
  return health-damage;
}