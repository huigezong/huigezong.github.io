local function p(x)
  return x
end
assert(1 < 3)
assert(1 <= 3)
assert(3 <= 3)
assert(3 > 1)
assert(3 >= 3)
assert(3 >= 3)
assert(p(1) < 3)
assert(p(1) <= 3)
assert(p(3) <= 3)
assert(p(3) > 1)
assert(p(3) >= 3)
assert(p(3) >= 3)
assert(1 < p(3))
assert(1 <= p(3))
assert(3 <= p(3))
assert(3 > p(1))
assert(3 >= p(3))
assert(3 >= p(3))
assert(p(1) < p(3))
assert(p(1) <= p(3))
assert(p(3) <= p(3))
assert(p(3) > p(1))
assert(p(3) >= p(3))
assert(p(3) >= p(3))