input = [1,2,3,0,-4,10,0]

# Hány <0 szám van?

sum = 0
for i in input:
    if i<0:
        sum += 1
print(f"Az inputban {sum} 0-nál kisebb szám van.")

from functools import reduce
print(f"ugyanez refuce-val: {reduce(lambda s,x : s + (1 if x<0 else 0), input, 0)}")